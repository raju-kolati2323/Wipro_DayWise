package Day2_Java_Assignment1;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Scanner;

public class DateTimeNumeric {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Amount: ");
		float amount = input.nextFloat();
		
		LocalDate date = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		String formattedDate = formatter.format(date);
		
		NumberFormat nf = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
		String currency = nf.format(amount);
		
		System.out.println("Current Date: "+formattedDate);
		System.out.println("Formatted Amount: "+currency);
		input.close();
		}

}
