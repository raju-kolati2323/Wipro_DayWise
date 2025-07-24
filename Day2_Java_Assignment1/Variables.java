package Day2_Java_Assignment1;
import java.util.Scanner;

public class Variables {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("ID: ");
		int id = input.nextInt();
		System.out.print("Name: ");
		String name = input.next();
		System.out.print("Marks: ");
		float marks = input.nextFloat();
		System.out.print("Grade: ");
		char grade = input.next().charAt(0);
		
		System.out.println("Student ID: "+id);
		System.out.println("\nName: "+name);
		System.out.println("Marks: "+marks);
		System.out.println("Grade: "+grade);
		
		input.close();
	}

}
