# mathdeli2dollar

`mathdeli2dollar` is a simple library to convert LaTeX math delimiters to dollar signs. It transforms LaTeX mathematical expressions wrapped in `\[ ... \]` and `\( ... \)` into `$$ ... $$` and `$ ... $`, respectively.

<a href="https://github.com/sponsors/sans-script"><img src="https://badgen.net/badge/GitHub/Sponsor?icon=github" alt="Sponsor"></a> <a href="https://www.paypal.com/donate/?business=alexhere.user@gmail.com"><img src="https://badgen.net/badge/Donate%20via/PayPal?icon=paypal" alt="Donate via PayPal"></a>

## Installation

You can install the package via npm:

```bash
npm install mathdeli2dollar
```

## Usage

### Example

Import the `mathdeli2dollar` function and pass a string containing LaTeX expressions:

```javascript
import mathdeli2dollar from "mathdeli2dollar";

const text = "Example: \\(x^2 + y^2 = z^2\\)";
console.log(mathdeli2dollar(text));
```

### Expected Output

The function will convert the input and return the text with the delimiters changed:

```plaintext
Example: $x^2 + y^2 = z^2$
```

## Contributing

If you find any bugs or would like to add new features, feel free to **open an issue** or **submit a pull request**.

### Contribution Steps

1. Fork the repository.

2. Create a new branch for your feature.

3. Make your changes and ensure everything works correctly.

4. Commit your changes following [semantic commit conventions](https://www.conventionalcommits.org/en/v1.0.0/).

5. Open a Pull Request with a detailed description of the changes.
