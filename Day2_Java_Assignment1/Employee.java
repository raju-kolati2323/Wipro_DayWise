package Day2_Java_Assignment1;

public class Employee {
	String name;
	double salary;
	
	public Employee(String name, int salary) {
		this.name = name;
		this.salary = salary;
	}
	
	public void display() {
		System.out.println("Name: "+name);
		System.out.println("Salary: "+salary);
	}
}
