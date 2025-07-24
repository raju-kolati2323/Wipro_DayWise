package Day2_Java_Assignment1;
import java.util.Scanner;

public class FlowChart {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Number: ");
//		int n = input.nextInt();
		float n = input.nextFloat();
		
		if(n>0)
			System.out.println("The number is positive.");
		else if(n<0)
			System.out.println("The number is negative.");
		else
			System.out.println("The number is zero.");
		input.close();
	}

}
