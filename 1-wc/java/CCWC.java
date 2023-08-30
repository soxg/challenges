import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

public class CCWC {

    public static void main(String[] args) throws IOException{
        if (args.length == 0) {
            System.out.println("Usage: java CCWC [-l | -m | -c | - w] file");
            return;
        }

        String option = args[0];
        File file;

        if (!option.startsWith("-")) {
            file = new File(option);
            option = "default";
        } else if (args.length > 1) {
            file = new File(args[1]);
        } else {
            System.out.println("Please specify a file.");
            return;
        }

    BufferedReader reader = new BufferedReader(new FileReader(file));
    String line;
    int lines = 0;
    int words = 0;
    int chars = 0;

    while ((line = reader.readLine()) != null) {
        lines++;
        words += line.split("\\s").length;
        chars += line.length();
    }
    reader.close();
    int bytes = (int) Files.size(file.toPath());

    switch (option) {
        case "-l": 
            System.out.println(lines);
            break;
        case "-m":
            System.out.println(chars);
            break;
        case "-c":
            System.out.println(bytes);
            break;
        case "-w":
            System.out.println(words);
            break;
        case "default":
            System.out.println(Integer.toString(lines) + Integer.toString(words) + Integer.toString(bytes));
            System.out.printf("%d %d %d%n", lines, words, bytes);
            break;
    }
    }
}