package Day2_Java_Assignment1;
import java.util.Scanner;

public class StringAPI {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("String: ");
		String st = input.next();
		System.out.print("Character: ");
		char ch = input.next().charAt(0);
		
		int count = 0;
		for (int i=0; i<st.length(); i++) {
			if(st.charAt(i)==ch)
				count++;
		}
		System.out.println("Character '"+ch+"' appears "+count+" times.");
		input.close();
	}

}
