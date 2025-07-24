package Day2_Java_Assignment1;

import java.util.Scanner;

public class EMMain {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Name: ");
		String name = input.next();
		
		System.out.print("Salary: ");
		int salary = input.nextInt();
		
		System.out.print("Department: ");
		String department = input.next();
		
		Manager mg = new Manager(name, salary, department);
		
		mg.display();
		
	}

}
