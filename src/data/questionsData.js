export const questionsData = [
  // SECTION A: EASY (Q1 - Q10)
  {
    id: 1,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q1. Primitive Data Types & Type Casting",
    question: "Write a Java program that declares variables of different primitive data types (int, double, char, boolean), assigns values to them, and performs explicit type casting from double to int. Print all values.",
    takeaway: "Understanding memory sizes, primitive type structures, and data truncation during narrowing conversions.",
    dos: "Always ensure you account for data loss when casting a larger datatype (like double) to a smaller one (int).",
    donts: "Do not use implicit casting for narrowing conversions; it will cause a compile-time error.",
    co: ["CO1"],
    po: ["PO1"],
    makaut: "MAKAUT Mapping: CO: CO1, PO: PO1",
    solutionCode: `public class PrimitiveCasting {
    public static void main(String[] args) {
        // Primitive variables
        int intValue = 42;
        double doubleValue = 99.85;
        char charValue = 'J';
        boolean booleanValue = true;

        // Explicit narrowing casting (double -> int)
        int castedInt = (int) doubleValue;

        System.out.println("Integer Value: " + intValue);
        System.out.println("Double Value: " + doubleValue);
        System.out.println("Character Value: " + charValue);
        System.out.println("Boolean Value: " + booleanValue);
        System.out.println("Casted Double to Int (Truncated): " + castedInt);
    }
}`
  },
  {
    id: 2,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q2. 1D Array Sum and Average",
    question: "Create a Java program to initialize a 1D array of 10 integers. Calculate and print the sum and average of all the elements.",
    takeaway: "Basic 1D array initialization and traversal using loops.",
    dos: "Use array.length dynamically in the loop condition to avoid hardcoding sizes.",
    donts: "Do not attempt to access array[array.length]; it will throw an ArrayIndexOutOfBoundsException.",
    co: ["CO2"],
    po: ["PO1", "PO2"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO1, PO2",
    solutionCode: `public class ArraySumAverage {
    public static void main(String[] args) {
        int[] numbers = {12, 24, 35, 46, 57, 68, 79, 80, 91, 100};
        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        double average = (double) sum / numbers.length;

        System.out.println("Sum of array elements: " + sum);
        System.out.println("Average of array elements: " + average);
    }
}`
  },
  {
    id: 3,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q3. Maximum and Minimum in 1D Array",
    question: "Write a program to find the maximum and minimum values in a given 1D array of integers.",
    takeaway: "Applying comparison logic during sequential array traversal.",
    dos: "Initialize your max and min variables with the first element of the array before starting the loop.",
    donts: "Do not initialize max to 0 or min to a large number artificially, as the array might contain all negative numbers.",
    co: ["CO2"],
    po: ["PO2"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2",
    solutionCode: `public class ArrayMinMax {
    public static void main(String[] args) {
        int[] numbers = {-15, 42, 8, -3, 99, 23, 0, 71};
        
        int max = numbers[0];
        int min = numbers[0];

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }

        System.out.println("Maximum Element: " + max);
        System.out.println("Minimum Element: " + min);
    }
}`
  },
  {
    id: 4,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q4. Student Class & Object Creation",
    question: "Define a class Student with attributes name, rollNumber, and marks. Create an object of this class, assign values, and display them using a displayDetails() method.",
    takeaway: "Understanding the blueprint nature of a Class and state-holding nature of an Object.",
    dos: "Group related properties and behaviors tightly within the class (Encapsulation).",
    donts: "Do not declare instance variables as static unless they represent a property shared across all objects.",
    co: ["CO3"],
    po: ["PO1", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO1, PO3",
    solutionCode: `class Student {
    String name;
    int rollNumber;
    double marks;

    public void displayDetails() {
        System.out.println("--- Student Details ---");
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

public class StudentTest {
    public static void main(String[] args) {
        Student student1 = new Student();
        student1.name = "Aarav Sharma";
        student1.rollNumber = 101;
        student1.marks = 92.5;

        student1.displayDetails();
    }
}`
  },
  {
    id: 5,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q5. 2D Matrix Initialization & Tabular Printing",
    question: "Write a Java program that creates a 2D array of size 3x3, initializes it with values from 1 to 9, and prints it in a tabular matrix format.",
    takeaway: "Visualizing and processing data in a grid/matrix format using nested loops.",
    dos: "Use nested for loops where the outer loop iterates over rows (matrix.length) and the inner loop over columns (matrix[i].length).",
    donts: "Do not confuse row index and column index variables inside the inner loop block.",
    co: ["CO2"],
    po: ["PO1"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO1",
    solutionCode: `public class MatrixPrint {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("3x3 Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + "\t");
            }
            System.out.println();
        }
    }
}`
  },
  {
    id: 6,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q6. Rectangle Class with Parameterized Constructor",
    question: "Create a class Rectangle with a parameterized constructor to initialize length and width. Include a method calculateArea() that returns the area.",
    takeaway: "Purpose and usage of parameterized constructors to initialize object state at the time of creation.",
    dos: "Use the 'this' keyword to differentiate between instance variables and constructor parameters if they share the same name.",
    donts: "Do not specify a return type (not even void) for the constructor.",
    co: ["CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO2, PO3",
    solutionCode: `class Rectangle {
    double length;
    double width;

    // Parameterized Constructor
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double calculateArea() {
        return length * width;
    }
}

public class RectangleTest {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(12.5, 8.0);
        System.out.println("Area of Rectangle: " + rect.calculateArea());
    }
}`
  },
  {
    id: 7,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q7. Count Even and Odd Numbers in 1D Array",
    question: "Write a program to count how many even and odd numbers exist in an initialized 1D array of integers.",
    takeaway: "Applying arithmetic operators (modulo) conditionally within iterations.",
    dos: "Keep separate, clearly named counter variables for evens and odds.",
    donts: "Do not modify the array elements while counting them.",
    co: ["CO2"],
    po: ["PO2"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2",
    solutionCode: `public class EvenOddCounter {
    public static void main(String[] args) {
        int[] numbers = {15, 22, 8, 37, 44, 91, 10, 3, 56};
        int evenCount = 0;
        int oddCount = 0;

        for (int num : numbers) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        System.out.println("Total Even Numbers: " + evenCount);
        System.out.println("Total Odd Numbers: " + oddCount);
    }
}`
  },
  {
    id: 8,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q8. Counter Class with Static Variable",
    question: "Create a class Counter with a static variable count. Increment count in the constructor. Create three objects and display the value of count.",
    takeaway: "Understanding class-level variables (static) versus instance-level variables.",
    dos: "Access the static variable using the Class name (e.g., Counter.count) to reflect best practices.",
    donts: "Do not rely on object references (obj.count) to access static fields, as it creates ambiguity.",
    co: ["CO3"],
    po: ["PO1"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO1",
    solutionCode: `class Counter {
    static int count = 0;

    public Counter() {
        count++;
    }
}

public class CounterTest {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();

        System.out.println("Total Objects Created (Counter.count): " + Counter.count);
    }
}`
  },
  {
    id: 9,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q9. Copy Array Elements in Reverse Order",
    question: "Write a program to copy the contents of one 1D array into another new array in reverse order.",
    takeaway: "Index manipulation and parallel array tracking.",
    dos: "Ensure the destination array is instantiated with the exact length of the source array before copying.",
    donts: "Do not just assign array2 = array1; that only copies the reference, not the actual values.",
    co: ["CO2"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2, PO3",
    solutionCode: `import java.util.Arrays;

public class ReverseArrayCopy {
    public static void main(String[] args) {
        int[] original = {10, 20, 30, 40, 50};
        int[] reversed = new int[original.length];

        for (int i = 0; i < original.length; i++) {
            reversed[i] = original[original.length - 1 - i];
        }

        System.out.println("Original Array: " + Arrays.toString(original));
        System.out.println("Reversed Array: " + Arrays.toString(reversed));
    }
}`
  },
  {
    id: 10,
    section: "Easy",
    sectionLabel: "Section A: Easy",
    title: "Q10. Encapsulated BankAccount Class",
    question: "Create a BankAccount class with private attribute balance. Provide public deposit(double amount) and withdraw(double amount) methods. Print the final balance.",
    takeaway: "Practical implementation of Encapsulation and data hiding.",
    dos: "Include validation logic (e.g., amount > 0 and balance >= amount) inside your methods.",
    donts: "Do not allow direct access to the balance variable from outside the class.",
    co: ["CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO2, PO3",
    solutionCode: `class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
        }
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew: $" + amount);
        } else {
            System.out.println("Insufficient funds or invalid withdrawal amount.");
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class BankAccountTest {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(500.0);
        account.deposit(200.0);
        account.withdraw(150.0);
        System.out.println("Final Balance: $" + account.getBalance());
    }
}`
  },

  // SECTION B: MEDIUM (Q11 - Q20)
  {
    id: 11,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q11. 3x3 Matrix Addition",
    question: "Write a Java program to perform Matrix Addition on two 3x3 2D arrays and store the result in a third 2D array.",
    takeaway: "Multi-dimensional data synchronization and arithmetic.",
    dos: "Verify that both matrices have identical dimensions before attempting addition.",
    donts: "Do not hardcode dimensions in the addition logic; use .length dynamically.",
    co: ["CO2"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2, PO3",
    solutionCode: `public class MatrixAddition {
    public static void main(String[] args) {
        int[][] matA = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int[][] matB = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };

        int rows = matA.length;
        int cols = matA[0].length;
        int[][] result = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = matA[i][j] + matB[i][j];
            }
        }

        System.out.println("Sum Matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(result[i][j] + "\t");
            }
            System.out.println();
        }
    }
}`
  },
  {
    id: 12,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q12. Array of Objects - Highest Salary Employee",
    question: "Create a class Employee with attributes id, name, and salary. Create an array of 5 Employee objects. Find and display the details of the employee with the highest salary.",
    takeaway: "Arrays of objects and passing object references.",
    dos: "Instantiate the array first (new Employee[5]), and then instantiate each object inside the array (array[i] = new Employee(...)).",
    donts: "Do not attempt to access properties of array elements before instantiating the objects; it will cause a NullPointerException.",
    co: ["CO2", "CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, CO3, PO: PO2, PO3",
    solutionCode: `class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: $" + salary);
    }
}

public class EmployeeSearch {
    public static void main(String[] args) {
        Employee[] employees = new Employee[5];
        employees[0] = new Employee(1, "Alice", 65000);
        employees[1] = new Employee(2, "Bob", 82000);
        employees[2] = new Employee(3, "Charlie", 74000);
        employees[3] = new Employee(4, "Diana", 95000);
        employees[4] = new Employee(5, "Evan", 89000);

        Employee highest = employees[0];
        for (int i = 1; i < employees.length; i++) {
            if (employees[i].salary > highest.salary) {
                highest = employees[i];
            }
        }

        System.out.println("Employee with Highest Salary:");
        highest.display();
    }
}`
  },
  {
    id: 13,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q13. Extract Principal Diagonal of Square Matrix",
    question: "Write a program to extract and print only the principal/main diagonal elements of a square 2D matrix.",
    takeaway: "Mathematical properties of matrices mapped to array indices (row == col).",
    dos: "Optimize the code using a single loop (matrix[i][i]) instead of nested loops checking for equality.",
    donts: "Do not run this logic without first validating that the matrix is a square (rows == columns).",
    co: ["CO2"],
    po: ["PO1", "PO2"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO1, PO2",
    solutionCode: `public class PrincipalDiagonal {
    public static void main(String[] args) {
        int[][] matrix = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };

        if (matrix.length != matrix[0].length) {
            System.out.println("Error: Matrix is not square!");
            return;
        }

        System.out.print("Principal Diagonal Elements: ");
        for (int i = 0; i < matrix.length; i++) {
            System.out.print(matrix[i][i] + " ");
        }
        System.out.println();
    }
}`
  },
  {
    id: 14,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q14. Time Addition Passing Objects as Parameters",
    question: "Create a class Time with hours and minutes. Write a method addTime(Time t1, Time t2) that takes two Time objects as parameters, adds them, and stores the result in the current calling object. (Handle minute overflow > 60).",
    takeaway: "Passing objects as parameters and managing state across multiple instances.",
    dos: "Use modulo minutes % 60 for the remaining minutes and division minutes / 60 to carry over hours.",
    donts: "Do not forget to account for 24-hour resets if your specific logic demands strict daily time boundaries.",
    co: ["CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO2, PO3",
    solutionCode: `class Time {
    int hours;
    int minutes;

    public Time() {
        this.hours = 0;
        this.minutes = 0;
    }

    public Time(int hours, int minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }

    public void addTime(Time t1, Time t2) {
        int totalMinutes = t1.minutes + t2.minutes;
        int extraHours = totalMinutes / 60;
        this.minutes = totalMinutes % 60;
        this.hours = t1.hours + t2.hours + extraHours;
    }

    public void display() {
        System.out.println(hours + " Hours, " + minutes + " Minutes");
    }
}

public class TimeAdditionTest {
    public static void main(String[] args) {
        Time t1 = new Time(3, 45);
        Time t2 = new Time(2, 30);
        Time result = new Time();

        result.addTime(t1, t2);

        System.out.print("Added Time: ");
        result.display();
    }
}`
  },
  {
    id: 15,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q15. Jagged Array Allocation & Traversal",
    question: "Write a Java program that creates a \"Jagged Array\" (a 2D array where rows have different numbers of columns). Initialize a jagged array with 3 rows of sizes 2, 3, and 4 respectively. Populate and print it.",
    takeaway: "Memory allocation flexibility in Java for multidimensional arrays.",
    dos: "Instantiate the row bounds first int[][] arr = new int[3][], then instantiate each sub-array arr[0] = new int[2].",
    donts: "Do not assume a uniform rectangular structure when iterating; strictly use arr[i].length for the inner loop.",
    co: ["CO2"],
    po: ["PO1", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO1, PO3",
    solutionCode: `public class JaggedArrayDemo {
    public static void main(String[] args) {
        int[][] arr = new int[3][];
        arr[0] = new int[2];
        arr[1] = new int[3];
        arr[2] = new int[4];

        int value = 1;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = value++;
            }
        }

        System.out.println("Jagged Array Contents:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}`
  },
  {
    id: 16,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q16. Constructor Overloading & Chaining in Box Class",
    question: "Implement Constructor Overloading in a class Box. Provide a default constructor (creates a cube of side 1), a constructor with one parameter (creates a cube of side 's'), and a constructor with three parameters (length, width, height). Calculate the volume for each.",
    takeaway: "Polymorphism at the instantiation level using overloaded constructors.",
    dos: "Use constructor chaining (this()) to reuse initialization logic and reduce redundant code.",
    donts: "Do not create overloaded constructors with the exact same data type sequences in parameters.",
    co: ["CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO2, PO3",
    solutionCode: `class Box {
    double length, width, height;

    // Default Constructor (Unit Cube)
    public Box() {
        this(1.0); // Chains to single parameter constructor
    }

    // Single Parameter Constructor (Custom Cube)
    public Box(double side) {
        this(side, side, side); // Chains to 3-parameter constructor
    }

    // Three Parameter Constructor (Cuboid)
    public Box(double length, double width, double height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    public double calculateVolume() {
        return length * width * height;
    }
}

public class BoxOverloadingTest {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box(5);
        Box b3 = new Box(4, 6, 8);

        System.out.println("Volume b1 (Default): " + b1.calculateVolume());
        System.out.println("Volume b2 (Cube 5): " + b2.calculateVolume());
        System.out.println("Volume b3 (4x6x8): " + b3.calculateVolume());
    }
}`
  },
  {
    id: 17,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q17. Linear Search in String Array",
    question: "Write a program to search for a specific String (e.g., a book title) in an array of Strings. Return the index if found, or -1 if not.",
    takeaway: "Linear searching through reference types.",
    dos: "Use the .equals() or .equalsIgnoreCase() method for comparing Strings.",
    donts: "Do not use the == operator for String value comparison, as it compares memory addresses, not content.",
    co: ["CO2"],
    po: ["PO2", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2, PO4",
    solutionCode: `public class StringSearch {
    public static int searchBook(String[] books, String target) {
        for (int i = 0; i < books.length; i++) {
            if (books[i].equalsIgnoreCase(target)) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        String[] library = {"Clean Code", "Effective Java", "Design Patterns", "Java Concurrency"};
        String query = "Effective Java";

        int index = searchBook(library, query);

        if (index != -1) {
            System.out.println("Book '" + query + "' found at index: " + index);
        } else {
            System.out.println("Book '" + query + "' not found.");
        }
    }
}`
  },
  {
    id: 18,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q18. Complex Number Multiplication Returning New Object",
    question: "Create a class ComplexNumber with real and imaginary parts. Write a method multiply(ComplexNumber other) that multiplies the current complex number with another and returns a new ComplexNumber object.",
    takeaway: "Returning newly created objects from methods and complex mathematical logic representation.",
    dos: "Apply the standard mathematical formula: (a+bi)(c+di) = (ac-bd) + (ad+bc)i.",
    donts: "Do not mutate the original object if the method is designed to return a new resultant object.",
    co: ["CO3"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO2, PO3",
    solutionCode: `class ComplexNumber {
    double real;
    double imag;

    public ComplexNumber(double real, double imag) {
        this.real = real;
        this.imag = imag;
    }

    public ComplexNumber multiply(ComplexNumber other) {
        double newReal = (this.real * other.real) - (this.imag * other.imag);
        double newImag = (this.real * other.imag) + (this.imag * other.real);
        return new ComplexNumber(newReal, newImag);
    }

    public void display() {
        System.out.println(real + " + " + imag + "i");
    }
}

public class ComplexTest {
    public static void main(String[] args) {
        ComplexNumber c1 = new ComplexNumber(3, 2);
        ComplexNumber c2 = new ComplexNumber(1, 4);

        ComplexNumber product = c1.multiply(c2);

        System.out.print("Product: ");
        product.display();
    }
}`
  },
  {
    id: 19,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q19. Bubble Sort Algorithm Implementation",
    question: "Write a Java program to sort a 1D integer array in ascending order using Bubble Sort without using the built-in Arrays.sort() method.",
    takeaway: "Fundamental sorting algorithmic logic and in-place array manipulation.",
    dos: "Include a boolean swapped flag to break the outer loop early if the array becomes sorted before all passes complete.",
    donts: "Do not loop the inner index all the way to length - 1 on every pass; reduce the limit by i to optimize.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3",
    solutionCode: `import java.util.Arrays;

public class BubbleSortDemo {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimized early break
        }
    }

    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before Sorting: " + Arrays.toString(data));
        
        bubbleSort(data);
        
        System.out.println("After Bubble Sort: " + Arrays.toString(data));
    }
}`
  },
  {
    id: 20,
    section: "Medium",
    sectionLabel: "Section B: Medium",
    title: "Q20. Sum of Individual Rows & Columns of 3x4 Matrix",
    question: "Write a program that calculates the sum of each individual row and each individual column of a 3x4 2D matrix.",
    takeaway: "Aggregation of multi-dimensional data across specific axes.",
    dos: "Use separate variables or arrays to accumulate row sums and column sums efficiently.",
    donts: "Do not mix up the outer and inner loop controls when traversing column-major versus row-major.",
    co: ["CO2"],
    po: ["PO2", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO2, PO: PO2, PO4",
    solutionCode: `public class RowColSum {
    public static void main(String[] args) {
        int[][] matrix = {
            {3, 5, 1, 7},
            {2, 8, 4, 6},
            {9, 0, 3, 5}
        };

        int rows = matrix.length;
        int cols = matrix[0].length;

        // Row Sums
        for (int i = 0; i < rows; i++) {
            int rowSum = 0;
            for (int j = 0; j < cols; j++) {
                rowSum += matrix[i][j];
            }
            System.out.println("Sum of Row " + (i + 1) + ": " + rowSum);
        }

        // Column Sums
        for (int j = 0; j < cols; j++) {
            int colSum = 0;
            for (int i = 0; i < rows; i++) {
                colSum += matrix[i][j];
            }
            System.out.println("Sum of Column " + (j + 1) + ": " + colSum);
        }
    }
}`
  },

  // SECTION C: ADVANCED (Q21 - Q30)
  {
    id: 21,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q21. Matrix Multiplication (2x3 and 3x2)",
    question: "Write a Java program to perform Matrix Multiplication of two 2D arrays (e.g., Matrix A of size 2x3 and Matrix B of size 3x2). Handle validation.",
    takeaway: "Complex nested iteration logic (O(n³)) and mathematical preconditions.",
    dos: "Explicitly check if the number of columns in Matrix A equals the number of rows in Matrix B before processing.",
    donts: "Do not forget to initialize the result matrix to 0 (default in Java) and accumulate sums += in the innermost loop.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3",
    solutionCode: `public class MatrixMultiplication {
    public static void main(String[] args) {
        int[][] A = {
            {1, 2, 3},
            {4, 5, 6}
        }; // 2x3

        int[][] B = {
            {7, 8},
            {9, 1},
            {2, 3}
        }; // 3x2

        int r1 = A.length, c1 = A[0].length;
        int r2 = B.length, c2 = B[0].length;

        if (c1 != r2) {
            System.out.println("Error: Cannot multiply matrices!");
            return;
        }

        int[][] C = new int[r1][c2];

        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                for (int k = 0; k < c1; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        System.out.println("Resultant Matrix (2x2):");
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                System.out.print(C[i][j] + "\t");
            }
            System.out.println();
        }
    }
}`
  },
  {
    id: 22,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q22. Spiral Matrix Traversal",
    question: "Write a program to traverse a given NxN 2D array in a Spiral format (Right, Down, Left, Up) and print the elements.",
    takeaway: "Advanced boundary tracking and pointer manipulation in matrices.",
    dos: "Use four boundary variables (top, bottom, left, right) and update them iteratively after completing each direction.",
    donts: "Do not neglect the edge cases for non-square rectangular matrices if testing bounds beyond NxN.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3, PO4",
    solutionCode: `public class SpiralMatrixTraversal {
    public static void main(String[] args) {
        int[][] matrix = {
            {1,  2,  3,  4},
            {5,  6,  7,  8},
            {9,  10, 11, 12},
            {13, 14, 15, 16}
        };

        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;

        System.out.print("Spiral Order: ");
        while (top <= bottom && left <= right) {
            // Right
            for (int i = left; i <= right; i++) System.out.print(matrix[top][i] + " ");
            top++;

            // Down
            for (int i = top; i <= bottom; i++) System.out.print(matrix[i][right] + " ");
            right--;

            // Left
            if (top <= bottom) {
                for (int i = right; i >= left; i--) System.out.print(matrix[bottom][i] + " ");
                bottom--;
            }

            // Up
            if (left <= right) {
                for (int i = bottom; i >= top; i--) System.out.print(matrix[i][left] + " ");
                left++;
            }
        }
        System.out.println();
    }
}`
  },
  {
    id: 23,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q23. Custom Dynamic MyArrayList Data Structure",
    question: "Create a custom class MyArrayList that mimics a dynamic array. It should wrap a standard array, track size, and provide add(int element) which doubles the underlying array capacity if it gets full.",
    takeaway: "Understanding dynamic memory management and data structure internals under the hood.",
    dos: "Use a private helper method resize() to handle the logic of creating a larger array and copying old elements.",
    donts: "Do not expose the underlying raw array directly via getters; maintain encapsulation to preserve the logical size.",
    co: ["CO2", "CO3"],
    po: ["PO3", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO2, CO3, PO: PO3, PO4",
    solutionCode: `class MyArrayList {
    private int[] data;
    private int size;
    private static final int DEFAULT_CAPACITY = 4;

    public MyArrayList() {
        data = new int[DEFAULT_CAPACITY];
        size = 0;
    }

    public void add(int element) {
        if (size == data.length) {
            resize();
        }
        data[size++] = element;
    }

    private void resize() {
        int[] newArray = new int[data.length * 2];
        for (int i = 0; i < data.length; i++) {
            newArray[i] = data[i];
        }
        data = newArray;
        System.out.println("Resized capacity to: " + data.length);
    }

    public int get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        return data[index];
    }

    public int size() {
        return size;
    }
}

public class MyArrayListTest {
    public static void main(String[] args) {
        MyArrayList list = new MyArrayList();
        for (int i = 1; i <= 10; i++) {
            list.add(i * 10);
        }
        System.out.println("Total Size: " + list.size());
        System.out.println("Element at index 5: " + list.get(5));
    }
}`
  },
  {
    id: 24,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q24. Singleton Design Pattern - DatabaseConnection",
    question: "Implement the Singleton Design Pattern in a class DatabaseConnection. Ensure that only one instance of the object can ever be created, and provide a public static method to retrieve it.",
    takeaway: "Controlling instantiation pipelines and understanding architectural design patterns.",
    dos: "Make the constructor private and store the instance in a private static variable.",
    donts: "Do not leave the class un-sealed to cloning or reflection without specific safeguards in enterprise scenarios (though basic is fine here).",
    co: ["CO3", "CO5"],
    po: ["PO3", "PO5"],
    makaut: "MAKAUT Mapping: CO: CO3, CO5, PO: PO3, PO5",
    solutionCode: `class DatabaseConnection {
    // Private static instance
    private static DatabaseConnection instance;

    // Private constructor prevents external instantiation
    private DatabaseConnection() {
        System.out.println("Initializing Database Connection Pool...");
    }

    // Public static method to get single instance
    public static synchronized DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public void query(String sql) {
        System.out.println("Executing SQL: " + sql);
    }
}

public class SingletonTest {
    public static void main(String[] args) {
        DatabaseConnection db1 = DatabaseConnection.getInstance();
        DatabaseConnection db2 = DatabaseConnection.getInstance();

        db1.query("SELECT * FROM users");
        System.out.println("Are db1 and db2 the same instance? " + (db1 == db2));
    }
}`
  },
  {
    id: 25,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q25. In-Place 90 Degree Matrix Rotation",
    question: "Write a Java program to rotate a square NxN matrix by 90 degrees clockwise in-place (without allocating a secondary 2D array).",
    takeaway: "In-place data swapping and spatial logic optimization.",
    dos: "Break the problem into two simpler steps: First, transpose the matrix, then reverse each row.",
    donts: "Do not allocate new int[][] for the rotation; it violates the \"in-place\" requirement.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3",
    solutionCode: `public class RotateMatrixInPlace {
    public static void rotate90Clockwise(int[][] matrix) {
        int n = matrix.length;

        // Step 1: Transpose matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Step 2: Reverse each row
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n / 2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - 1 - j];
                matrix[i][n - 1 - j] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        rotate90Clockwise(matrix);

        System.out.println("Matrix after 90 Deg Clockwise Rotation:");
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + "\t");
            }
            System.out.println();
        }
    }
}`
  },
  {
    id: 26,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q26. Object Composition - Library with Book Array",
    question: "Create a class Library containing an array of Book objects. Implement methods to addBook(), findBookByAuthor(String author), and displayAll(). Validate that no more books can be added if the array capacity is reached.",
    takeaway: "Object composition (\"Has-A\" relationship without inheritance) and multi-object management.",
    dos: "Keep a counter for the current number of books inserted to prevent NullPointerExceptions when traversing the partially filled array.",
    donts: "Do not loop through the entire capacity of the array when searching; only loop up to the number of books actually added.",
    co: ["CO3", "CO5"],
    po: ["PO2", "PO3", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO3, CO5, PO: PO2, PO3, PO4",
    solutionCode: `class Book {
    String title;
    String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    private Book[] books;
    private int count;

    public Library(int capacity) {
        books = new Book[capacity];
        count = 0;
    }

    public void addBook(Book book) {
        if (count < books.length) {
            books[count++] = book;
            System.out.println("Added: " + book.title);
        } else {
            System.out.println("Error: Library capacity reached!");
        }
    }

    public void findBookByAuthor(String author) {
        System.out.println("Searching books by " + author + ":");
        boolean found = false;
        for (int i = 0; i < count; i++) {
            if (books[i].author.equalsIgnoreCase(author)) {
                System.out.println("- " + books[i].title);
                found = true;
            }
        }
        if (!found) System.out.println("No books found by this author.");
    }
}

public class LibraryTest {
    public static void main(String[] args) {
        Library lib = new Library(3);
        lib.addBook(new Book("Java Fundamentals", "Soham Sengupta"));
        lib.addBook(new Book("OOP Masterclass", "Soham Sengupta"));
        lib.findBookByAuthor("Soham Sengupta");
    }
}`
  },
  {
    id: 27,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q27. 3x3 Magic Square Validation",
    question: "Write a program to check if a given 3x3 2D array represents a valid Magic Square (sums of all rows, all columns, and both diagonals are perfectly equal).",
    takeaway: "Cross-axis data validation and boolean flag logic.",
    dos: "Calculate the sum of the first row initially to act as the baseline reference sum for all subsequent checks.",
    donts: "Do not continue checking once a mismatch is found; use return false or break to optimize performance.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3",
    solutionCode: `public class MagicSquareValidator {
    public static boolean isMagicSquare(int[][] mat) {
        int n = mat.length;
        int targetSum = 0;

        // Baseline row sum
        for (int j = 0; j < n; j++) targetSum += mat[0][j];

        // Row & Column sums
        for (int i = 0; i < n; i++) {
            int rSum = 0, cSum = 0;
            for (int j = 0; j < n; j++) {
                rSum += mat[i][j];
                cSum += mat[j][i];
            }
            if (rSum != targetSum || cSum != targetSum) return false;
        }

        // Diagonals
        int diag1 = 0, diag2 = 0;
        for (int i = 0; i < n; i++) {
            diag1 += mat[i][i];
            diag2 += mat[i][n - 1 - i];
        }

        return diag1 == targetSum && diag2 == targetSum;
    }

    public static void main(String[] args) {
        int[][] magic = {
            {2, 7, 6},
            {9, 5, 1},
            {4, 3, 8}
        };

        System.out.println("Is Magic Square? " + isMagicSquare(magic));
    }
}`
  },
  {
    id: 28,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q28. Immutable Object - ImmutablePoint Class",
    question: "Create an immutable class ImmutablePoint with x and y coordinates. Demonstrate that once the object is created, its state cannot be modified, and methods that alter coordinates must return a new instance of ImmutablePoint.",
    takeaway: "Building thread-safe, side-effect-free objects (Immutability).",
    dos: "Declare all class variables as private final and do not provide setter methods.",
    donts: "Do not allow any method to mutate this.x or this.y.",
    co: ["CO3"],
    po: ["PO3"],
    makaut: "MAKAUT Mapping: CO: CO3, PO: PO3",
    solutionCode: `final class ImmutablePoint {
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    // Returns a NEW instance instead of mutating current instance
    public ImmutablePoint translate(int dx, int dy) {
        return new ImmutablePoint(this.x + dx, this.y + dy);
    }
}

public class ImmutabilityDemo {
    public static void main(String[] args) {
        ImmutablePoint p1 = new ImmutablePoint(5, 10);
        ImmutablePoint p2 = p1.translate(2, 3);

        System.out.println("P1 Coordinates: (" + p1.getX() + ", " + p1.getY() + ")");
        System.out.println("P2 Coordinates: (" + p2.getX() + ", " + p2.getY() + ")");
        System.out.println("P1 unchanged? " + (p1 != p2));
    }
}`
  },
  {
    id: 29,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q29. Tic-Tac-Toe Game State Evaluator",
    question: "Write a Java program to simulate a simple Tic-Tac-Toe board using a 3x3 char 2D array. Write a method checkWinner() that scans the board and determines if 'X' won, 'O' won, or if it is a draw.",
    takeaway: "Game-state evaluation and exhaustive spatial condition checking.",
    dos: "Check all 8 possible winning conditions (3 horizontal, 3 vertical, 2 diagonal).",
    donts: "Do not declare a draw simply if no one has won; ensure the board is entirely full with no empty spaces before declaring a draw.",
    co: ["CO2", "CO4"],
    po: ["PO2", "PO3", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO2, CO4, PO: PO2, PO3, PO4",
    solutionCode: `public class TicTacToeEvaluator {
    public static String checkWinner(char[][] board) {
        // Rows & Columns
        for (int i = 0; i < 3; i++) {
            if (board[i][0] != ' ' && board[i][0] == board[i][1] && board[i][1] == board[i][2])
                return board[i][0] + " Wins!";
            if (board[0][i] != ' ' && board[0][i] == board[1][i] && board[1][i] == board[2][i])
                return board[0][i] + " Wins!";
        }

        // Diagonals
        if (board[0][0] != ' ' && board[0][0] == board[1][1] && board[1][1] == board[2][2])
            return board[0][0] + " Wins!";
        if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0])
            return board[0][2] + " Wins!";

        // Check for empty space
        for (int r = 0; r < 3; r++) {
            for (int c = 0; c < 3; c++) {
                if (board[r][c] == ' ') return "Game In Progress";
            }
        }

        return "Draw!";
    }

    public static void main(String[] args) {
        char[][] board = {
            {'X', 'O', 'X'},
            {'O', 'X', 'O'},
            {'O', 'X', 'X'}
        };

        System.out.println("Result: " + checkWinner(board));
    }
}`
  },
  {
    id: 30,
    section: "Advanced",
    sectionLabel: "Section C: Advanced",
    title: "Q30. Deep Copy vs Shallow Copy Implementation",
    question: "Explain and demonstrate \"Deep Copy\" vs \"Shallow Copy\". Create a Course class and a Student class (where Student contains an array of Course objects). Show how a shallow copy leads to unintended state changes in both clones, and implement a deep copy method to fix it.",
    takeaway: "Memory referencing, heap allocation mechanics, and avoiding aliasing bugs in complex object graphs.",
    dos: "In the deep copy constructor, iterate through the array of references and manually instantiate new objects for each element.",
    donts: "Do not rely on Object.clone() without understanding that its default behavior only provides a shallow copy.",
    co: ["CO3", "CO4"],
    po: ["PO2", "PO3", "PO4"],
    makaut: "MAKAUT Mapping: CO: CO3, CO4, PO: PO2, PO3, PO4",
    solutionCode: `class Course {
    String courseName;
    public Course(String name) { this.courseName = name; }
}

class StudentGraph implements Cloneable {
    String name;
    Course[] courses;

    public StudentGraph(String name, Course[] courses) {
        this.name = name;
        this.courses = courses;
    }

    // Deep Copy Constructor
    public StudentGraph deepCopy() {
        Course[] newCourses = new Course[this.courses.length];
        for (int i = 0; i < this.courses.length; i++) {
            newCourses[i] = new Course(this.courses[i].courseName);
        }
        return new StudentGraph(this.name, newCourses);
    }
}

public class CopyDemo {
    public static void main(String[] args) {
        Course[] courses = { new Course("Java"), new Course("Data Structures") };
        StudentGraph s1 = new StudentGraph("Rahul", courses);
        StudentGraph s2 = s1.deepCopy();

        // Modify course in s2
        s2.courses[0].courseName = "Advanced Java";

        System.out.println("s1 Course 0: " + s1.courses[0].courseName); // Remains "Java"
        System.out.println("s2 Course 0: " + s2.courses[0].courseName); // Changed to "Advanced Java"
    }
}`
  }
];
