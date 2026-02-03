const input = gets("Qual o seu comando desejado? ");

switch (input) {
    case "start":
        print("Bot started");
        break;
    case "stop":
        print("Bot stopped");
        break;
    case "pause":
        print("Bot paused");
        break;
    default:
        ("unknown command");
}