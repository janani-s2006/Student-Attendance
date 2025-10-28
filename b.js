import streamlit as st

st.title("Simple To-Do List")

if "tasks" not in st.session_state:
    st.session_state.tasks = []

task = st.text_input("Enter a task:")
if st.button("Add") and task:
    st.session_state.tasks.append(task)

for t in st.session_state.tasks:
    st.write("✅", t)

// ==========================
// 1️⃣ Java To-Do List (CRUD)
// ==========================
import java.util.*;
class TodoList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> list = new ArrayList<>();
        while (true) {
            System.out.println("1.Add 2.View 3.Remove 4.Exit");
            int ch = sc.nextInt();
            sc.nextLine();
            if (ch == 1) list.add(sc.nextLine());
            else if (ch == 2) list.forEach(System.out::println);
            else if (ch == 3) list.remove(sc.nextLine());
            else break;
        }
    }
}

// ==========================
// 2️⃣ Java Calculator
// ==========================
import java.util.*;
class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble(), b = sc.nextDouble();
        char op = sc.next().charAt(0);
        System.out.println("Result=" + switch (op) {
            case '+' -> a + b;
            case '-' -> a - b;
            case '*' -> a * b;
            case '/' -> a / b;
            default -> 0;
        });
    }
}

// ==========================
// 3️⃣ Java Quiz App
// ==========================
import java.util.*;
class Quiz {
    public static void main(String[] args) {
        String[] q = {"2+2=?", "5-3=?"};
        String[] a = {"4", "2"};
        int score = 0;
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < q.length; i++) {
            System.out.println(q[i]);
            if (sc.next().equals(a[i])) score++;
        }
        System.out.println("Score=" + score);
    }
}

// ==========================
// 4️⃣ Java Temperature Conversion
// ==========================
import java.util.*;
class TempConvert {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double c = sc.nextDouble();
        System.out.println("Fahrenheit=" + ((c * 9 / 5) + 32));
    }
}

// ==========================
// 5️⃣ Java Expense Tracker
// ==========================
import java.util.*;
class ExpenseTracker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, Double> exp = new HashMap<>();
        while (true) {
            System.out.println("1.Add 2.View 3.Exit");
            int ch = sc.nextInt();
            sc.nextLine();
            if (ch == 1) exp.put(sc.nextLine(), sc.nextDouble());
            else if (ch == 2) exp.forEach((k, v) -> System.out.println(k + ":" + v));
            else break;
        }
    }
}

// ==========================
// 6️⃣ Java Contact Book
// ==========================
import java.util.*;
class ContactBook {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, String> contacts = new HashMap<>();
        while (true) {
            System.out.println("1.Add 2.View 3.Search 4.Exit");
            int c = sc.nextInt(); sc.nextLine();
            if (c == 1) contacts.put(sc.nextLine(), sc.nextLine());
            else if (c == 2) contacts.forEach((k, v) -> System.out.println(k + ":" + v));
            else if (c == 3) System.out.println(contacts.getOrDefault(sc.nextLine(), "Not found"));
            else break;
        }
    }
}

// ==========================
// 7️⃣ Java News App
// ==========================
class NewsFeed {
    public static void main(String[] args) {
        String[] news = {"AI reshapes jobs", "SpaceX launches success"};
        for (String n : news) System.out.println("News: " + n);
    }
}

// ==========================
// 8️⃣ Java Dictionary App
// ==========================
import java.util.*;
class DictionaryApp {
    public static void main(String[] args) {
        Map<String, String> dict = Map.of("Java", "A programming language", "AI", "Artificial Intelligence");
        Scanner sc = new Scanner(System.in);
        System.out.println(dict.getOrDefault(sc.nextLine(), "Word not found"));
    }
}

// ==========================
// 9️⃣ Java Currency Converter
// ==========================
import java.util.*;
class CurrencyConverter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double inr = sc.nextDouble();
        System.out.println("USD=" + inr / 83.0);
    }
}

// ==========================
// 🔟 Java Book Finder
// ==========================
import java.util.*;
class BookFinder {
    public static void main(String[] args) {
        String[] books = {"Java Basics", "Python Guide", "AI Explained"};
        Scanner sc = new Scanner(System.in);
        String key = sc.nextLine();
        Arrays.stream(books).filter(b -> b.toLowerCase().contains(key.toLowerCase())).forEach(System.out::println);
    }
}

// ==========================
// 11️⃣ Java Form Validation
// ==========================
import java.util.regex.*;
class FormValidation {
    public static void main(String[] args) {
        String email = "test@gmail.com", pass = "abc123";
        System.out.println(Pattern.matches("\\w+@\\w+\\.\\w+", email) && pass.length() >= 6 ? "Valid" : "Invalid");
    }
}

// ==========================
// 12️⃣ Java Dark/Light Theme
// ==========================
class ThemeSwitch {
    public static void main(String[] args) {
        boolean dark = true;
        System.out.println(dark ? "Dark Mode Enabled" : "Light Mode Enabled");
    }
}

// ==========================
// 13️⃣ Java Counter App
// ==========================
class Counter {
    public static void main(String[] args) throws Exception {
        int count = 0;
        for (int i = 0; i < 5; i++) {
            count++;
            System.out.println("Count: " + count);
            Thread.sleep(500);
        }
    }
}

// ==========================
// 14️⃣ Java Calculate Age
// ==========================
import java.time.*;
class AgeCalculator {
    public static void main(String[] args) {
        int year = 2003;
        int age = Year.now().getValue() - year;
        System.out.println("Age=" + age);
    }
}

// ==========================
// 15️⃣ Java Discount Calculator
// ==========================
import java.util.*;
class DiscountCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double price = sc.nextDouble(), disc = sc.nextDouble();
        System.out.println("Final Price=" + (price - (price * disc / 100)));
    }
}

// ==========================
// 16️⃣ Java Online Shopping (Deploy Notify)
// ==========================
class OnlineShopping {
    public static void main(String[] args) {
        System.out.println("Build successful → Deploying to server...");
        System.out.println("Deployment done! Notification sent.");
    }
}

// ==========================
// 17️⃣ Java BMI Calculator
// ==========================
import java.util.*;
class BMICalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double w = sc.nextDouble(), h = sc.nextDouble();
        double bmi = w / (h * h);
        System.out.println("BMI=" + bmi);
    }
}

// ==========================
// 18️⃣ Java Calendar Picker
// ==========================
import java.time.*;
class CalendarPicker {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("Today: " + today);
    }
}

// ==========================
// 19️⃣ Java Recipe Finder
// ==========================
import java.util.*;
class RecipeFinder {
    public static void main(String[] args) {
        Map<String, String> recipes = Map.of("Pasta", "Boil noodles, add sauce", "Tea", "Boil water, add tea leaves");
        Scanner sc = new Scanner(System.in);
        System.out.println(recipes.getOrDefault(sc.nextLine(), "Recipe not found"));
    }
}

// ==========================
// 20️⃣ Java Jenkins Notify (Pipeline Simulation)
// ==========================
class JenkinsNotify {
    public static void main(String[] args) {
        System.out.println("Pipeline triggered...");
        System.out.println("Build → Test → Deploy → Notification sent!");
    }
}
