package Day2_Java_Assignment1;
import java.util.Scanner;

public class PrimitiveDataTypes {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Enter your age: ");
		int age = input.nextInt();
		System.out.print("Enter your height: ");
		float height = input.nextFloat();
		System.out.print("Enter your weight: ");
		float weight = input.nextFloat();
		
		System.out.println("Age: "+age);
		System.out.println("\nHeight: "+height);
		System.out.println("Weight: "+weight);
		input.close();
	}

}
