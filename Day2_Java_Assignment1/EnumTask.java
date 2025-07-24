package Day2_Java_Assignment1;

import java.util.Scanner;

public class EnumTask {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Day: ");
		String day = input.next();
		day = day.toUpperCase();
		
		switch(day) {
		case "MONDAY":
			System.out.println("Start of the work week!");
			return;
		case "TUESDAY":
			System.out.println("Second day of the week!");
			return;
		case "WEDNESDAY":
			System.out.println("Third day of the week!");
			return;
		case "THURSDAY":
			System.out.println("Fourth day of the week!");
			return;
		case "FRIDAY":
			System.out.println("Fifth day of the week!");
			return;
		case "SATURDAY":
			System.out.println("Last day of the work week!");
			return;
		case "SUNDAY":
			System.out.println("Weekend!");
			return;
		default:
			System.out.println("Invalid input");

		}
		input.close();
	}

}
