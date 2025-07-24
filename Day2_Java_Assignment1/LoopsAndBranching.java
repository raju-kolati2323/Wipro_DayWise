package Day2_Java_Assignment1;
import java.util.Scanner;

public class LoopsAndBranching {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("N = ");
		int n = input.nextInt();
		
		for(int i=0; i<n; i++) {
			System.out.print(i*2);
			if(i<n-1)
				System.out.print(" ");
		}
		input.close();
	}

}
