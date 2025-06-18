/* NOTE
 * <faco-code class="class-name"></faco-code>
 *
 * "class-name": {
 * 	 fileName: "fileName",
 *   syntax: "syntax-*", // check "./syntax-data.js"
 *   code: String.raw`code line 1
 * code line 2
 *   code line 2-1
 * code line 3`
 * }
 *
 * Code line indent using space please.
 * Or "./src/faco-code.css" .code-block { tab-size: 2; } or 4, 8
 */

const FacoCodeData = {
	"faco-c": {
		fileName: "file_name.c",
		syntax: "syntax-c",
		code: String.raw`#include <stdio.h>

int main() {
  // one line comment

  /* multi
  line
  comment */

  /* comment syntax text */int testNumber = 10;// comment syntax test
	int binNum = 0b0101;
	int octNum = 0o1234;
  int hexNumber = 0xFAC0;
  float testFloat = 1.111f;
	double testDouble = 1.234;

  char testT = 'T';
  char testText[10] = "Test text";

  if (testNumber == 1) {
    testNumber++;
  } else {
    testNumber--;
  }

  for (int i = 0; i < 2; i++) {
    printf("Text: %s\n", testText);
  }
  printf("Don't select \"int\" int printf.\n");

  return 0;
}`
	},

	"faco-cpp": {
		fileName: "file_name.cpp",
		syntax: "syntax-cpp",
		code: String.raw`#include <iostream>

int main() {
  int year = 2024;
  float pi = 3.14f;
  char f = 'F';
  std::string month = "June";

  std::cout << "Year: " << year << "\n";
  std::cout << "PI: " << pi << "\n";
  std::cout << "f: " << f << "\n";
  std::cout << "Month: " << month << "\n";

  return 0;
}`
	}
};

export { FacoCodeData };

