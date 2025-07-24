package Day2_Java_Assignment1;
import java.util.Scanner;

public class SwitchCases {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Number1: ");
		int a = input.nextInt();
		System.out.print("Number2: ");
		int b = input.nextInt();
		System.out.print("Operation (+,-,*,/): ");
		char op = input.next().charAt(0);
		
		switch(op){
		case '+':
			System.out.println("Result: "+(a+b));
			break;
		case '-':
			System.out.println("Result: "+(a-b));
			break;
		case '*':
			System.out.println("Result: "+(a*b));
			break;
		case '/':
			System.out.println("Result: "+(a/b));
			break;
		default:
			System.out.println("Invalid operation.");
		}
		input.close();
	}

}
