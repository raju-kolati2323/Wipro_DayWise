package Day2_Java_Assignment1;
import java.util.Scanner;

public class Arrays {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int total = 0;

		int[] nums = new int[5];
		for(int i=0; i<5; i++) {
			System.out.print("Enter a number: ");
			nums[i] = input.nextInt();
		}
		for(int num : nums) {
			total+=num;
		}
		float average = total/5;
		System.out.println("Average: "+average);
		input.close();
	}

}
