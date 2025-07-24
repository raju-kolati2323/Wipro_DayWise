package Day2_Java_Assignment1;
import java.util.Scanner;

public class Conditions {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Marks: ");
		int marks = input.nextInt();
		if(marks>=90)
			System.out.println("Grade: A+");
		else if(marks>=80 && marks<90)
			System.out.println("Grade: A");
		if(marks>=70 && marks<80)
			System.out.println("Grade: B");
		if(marks>=60 && marks<70)
			System.out.println("Grade: C");
		if(marks<60)
			System.out.println("Grade: Fail");
		input.close();
	}

}
