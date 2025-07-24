package Day2_Java_Assignment1;
import java.util.Scanner;

public class StringConcatenation {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("First Name: ");
		String first = input.next();
		System.out.print("Last Name: ");
		String last = input.next();
		
		System.out.println("Hello, "+first+" "+last+"! Welcome to the system.");
		input.close();
	}

}
