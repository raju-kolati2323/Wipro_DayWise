package Day2_Java_Assignment1;

public class Manager extends Employee{

	private String department;

	public Manager(String name, int salary, String department) {
		super(name, salary);
		this.department = department;
	}
	
	public void display() {
		super.display();
		System.out.println("Department : "+department);
	}

}
