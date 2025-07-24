package Day2_Java_Assignment1;
import java.util.Scanner;

public class Operators {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Number1: ");
		int n1 = input.nextInt();
		System.out.print("Number2: ");
		int n2 = input.nextInt();
		
		System.out.println("Addition: "+(n1+n2));
		System.out.println("Greater number: "+((n1>n2)?n1:n2));
		System.out.println("Are both positive? "+((n1>0 && n2>0)?true:false));
		
		input.close();
	}

}
