      function copyToClipboard(button) {
        const codeElement = button.previousElementSibling;
        const text = codeElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
          const originalText = button.textContent;
          button.textContent = "Copied!";
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        });
      }