package Day2_Java_Assignment1;
import java.util.Scanner;

public class StringBuilderReverse {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Input: ");
		String sentence = input.nextLine();

		StringBuilder sb = new StringBuilder(sentence);
		
		System.out.println("Original: "+sentence);
		System.out.println("\nReversed: "+sb.reverse());
		input.close();
	}

}
