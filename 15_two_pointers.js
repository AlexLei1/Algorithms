
//! O(n2).
function isPairSum(A, X) {
	const N = A.length
	for (var i = 0; i < N-1; i++)
	{
			for (var j = i+1; j < N; j++)
			{
					// as equal i and j means same element
					if (i == j)
							continue;

					// pair exists
					if (A[i] + A[j] == X)
							return 1;

					// as the array is sorted
					if (A[i] + A[j] > X)
							break;
			}
	}

	// No pair found with given sum.
	return 0;
}

//!---------------------------------------------------------------
//! O(N). Two Pointers 

function isPairSum(A, X){
	const N = A.length

	// представляет первый указатель
	var i = 0;
	// представляет второй указатель
	var j = N - 1;

	while (i < j) {

		// Если мы найдем пару
		if (A[i] + A[j] == X) 
			return true;

				
		// Если сумма элементов в текущем
		// указателей меньше, движемся в сторону
		// более высокие значения, выполняя i++
		else if (A[i] + A[j] < X) i++;

		// Если сумма элементов в текущем
		// указателей больше, движемся в сторону
		// уменьшить значения, выполнив j--
		else j--;
	}
	return false;
}
 
console.log(isPairSum([ 3, 5, 9, 2, 8, 10, 11 ], 17));