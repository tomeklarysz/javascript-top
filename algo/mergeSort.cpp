#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  int left[n1];
  int right[n2];
  for (int i=0; i<n1; ++i) {
    left[i] = arr[l + i];
  }
  for (int j=0; j<n2; ++j) {
    right[j] = arr[m + 1 + j];
  }

  int i = 0;
  int j = 0;
  int k = l;

  while (i<n1 && j<n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  
  for (; i<n1; ++i) {
    arr[k] = left[i];
    k++;
  }
  for (; j<n2; ++j) {
    arr[k] = right[j];
    k++;
  }
}

void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);

    merge(arr, l, m, r);
  }
}


void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++)
    cout << arr[i] << " ";
  cout << endl;
}


int main() {
  int arr[] = {4, 2, 6, 3, 5, 1};
  int size = sizeof(arr) / sizeof(arr[0]);
  int r = size - 1;
  int l = 0;
  int m = l + (r - l) / 2;
  
  mergeSort(arr, l, r);
  
  cout << "Sorted array: \n";
  printArray(arr, size);
  return 0;
}