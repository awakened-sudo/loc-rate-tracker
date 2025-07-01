import * as vscode from "vscode";

// Keys used in workspace/global storage
const LOC_KEY = "locRateTracker.totalLines";
const RATE_KEY = "locRateTracker.rate";

export function activate(context: vscode.ExtensionContext) {
  // Load persisted state
  let totalLines = context.globalState.get<number>(LOC_KEY, 0);
  let rate       = context.globalState.get<number>(RATE_KEY, 0);

  // Status-bar item
  const status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  status.command = "locRateTracker.setRate";          // click to adjust rate
  updateStatus();
  status.show();
  context.subscriptions.push(status);

  // --- Commands -----------------------------------------------------------
  context.subscriptions.push(
    vscode.commands.registerCommand("locRateTracker.setRate", async () => {
      const input = await vscode.window.showInputBox({
        prompt: "Enter your charge per line of code (e.g. 0.05)",
        validateInput: (v) => (isFinite(Number(v)) && Number(v) >= 0 ? undefined : "Enter a non-negative number")
      });
      if (input !== undefined) {
        rate = Number(input);
        await context.globalState.update(RATE_KEY, rate);
        updateStatus();
      }
    }),

    vscode.commands.registerCommand("locRateTracker.resetCount", async () => {
      totalLines = 0;
      await context.globalState.update(LOC_KEY, totalLines);
      updateStatus();
    })
  );

  // --- Document-change listener ------------------------------------------
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((e) => {
      let delta = 0;
      for (const change of e.contentChanges) {
        // Lines removed = range height
        const linesRemoved = change.range.end.line - change.range.start.line;
        // Lines added = number of newline chars in inserted text
        const linesAdded   = change.text.split(/\r?\n/).length - 1;
        delta += linesAdded - linesRemoved;
      }
      if (delta !== 0) {
        totalLines += delta;
        context.globalState.update(LOC_KEY, totalLines);
        updateStatus();
      }
    })
  );

  // --- Helpers ------------------------------------------------------------
  function updateStatus() {
    const cost = (totalLines * rate).toFixed(2);
    status.text = `$(graph) LOC: ${totalLines}  •  Rate: ${rate}/LOC  •  Total: ${cost}`;
    status.tooltip = `Lines of Code × Rate = Cost\n${totalLines} × ${rate} = ${cost}`;
  }
}

export function deactivate() {
  /* nothing to clean up */
}
