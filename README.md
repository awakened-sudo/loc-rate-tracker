# LOC Rate Tracker

 <!-- TODO: Replace with actual demo GIF -->

**LOC Rate Tracker** is a simple yet powerful VS Code extension that tracks the lines of code (LOC) you write and multiplies them by a user-defined rate. This is perfect for freelance developers, consultants, or anyone who wants to quantify their coding output in monetary terms.

---

## Features

*   **Real-time LOC Tracking:** Automatically counts lines of code as you type, add, or remove them.
*   **Customizable Rate:** Set your own rate per line of code.
*   **Status Bar Integration:** Keep an eye on your progress with a convenient status bar item that displays:
    *   Total Lines of Code (LOC)
    *   Your configured rate per LOC
    *   The total calculated cost
*   **Persistent State:** Your LOC count and rate are saved between VS Code sessions.
*   **Easy to Use Commands:** Quickly set your rate or reset the counter.

---

## Commands

You can access the following commands through the VS Code command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`):

*   `LOC Rate Tracker: Set Rate (/LOC)`: This will prompt you to enter your desired rate per line of code.
*   `LOC Rate Tracker: Reset LOC Counter`: This will reset the lines of code counter back to zero.

---

## Installation

1.  Open **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3.  Search for `LOC Rate Tracker`.
4.  Click **Install**.

Alternatively, you can install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=awakened-sudo.loc-rate-tracker).

---

## Configuration

To set your rate, you can either click on the status bar item or run the `LOC Rate Tracker: Set Rate (/LOC)` command from the command palette. The extension will prompt you for a numerical value.

---

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/awakened-sudo/loc-rate-tracker).

---

## License

This project is licensed under the [MIT License](LICENSE).
