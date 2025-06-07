import java.util.Random;

class Example {
	public static void main(String args[]) {
		Random random = new Random();
		int marks[][] = new int[10][4];
		// 10-> No of Students| length of 2D Array
		// 4 -> No of Marks| length of 1D Array

		// Read marks for Student 1
		for(int j =0; j < 10; j++){
			for(int i = 0; i < 4; i++){
				marks[j][i] = random.nextInt(101);
			}
		}

		for(int j = 0; j < 10; j++){
			for(int i = 0; i < 4; i++){
				System.out.print(marks[j][i] + "\t");
			}
			System.out.println();
		}
	}
}
