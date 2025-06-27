/* NOTE
 * FacoCodeData reference: "README.md"
 * Path from facoweb root: "docs/faco-code/README.md"
 */

const FacoCodeData = {
  "faco-c": { /* define: <faco-code class="faco-c"></faco-code> */
    fileName: "file_name.c",
    syntax: "syntax-c", /* define: syntax-data.js */
    code: String.raw`#include <stdio.h>

int main() {
  // one line comment

  /* multi
  line
  comment */

  /* comment syntax text */int testNumber = 10;// comment syntax test
  int binary = 0b0101;
  int octal = 0o1234;
  int decimal = 10;
  int hex = 0xFAC0;
  float pi = 3.14f;
  double pi_double = 3.14;
  char f = 'F';
  char facoweb[10] = "Facoweb";

  if (decimal == 1) {
    decimal++;
  } else {
    decimal--;
  }

  for (int i = 0; i < 2; i++) {
    printf("Text: %s\n", facoweb);
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
  // comment
  /* comment
  comment
  comment */

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
  // add more
};
