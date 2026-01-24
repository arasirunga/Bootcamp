# anagrams.py

from anagram_checker import AnagramChecker


def show_menu():
    print("\n--- ANAGRAM CHECKER ---")
    print("1. Enter a word")
    print("2. Exit")


def main():
    checker = AnagramChecker()

    while True:
        show_menu()
        choice = input("Choose an option (1 or 2): ").strip()

        if choice == "2":
            print("Goodbye!")
            break

        elif choice == "1":
            user_input = input("Enter a word: ").strip()

            # Validation: only one word
            if len(user_input.split()) != 1:
                print("❌ Error: Please enter only one word.")
                continue

            # Validation: alphabetic characters only
            if not user_input.isalpha():
                print("❌ Error: Only alphabetic characters are allowed.")
                continue

            word = user_input.lower()

            # Check if valid English word
            if not checker.is_valid_word(word):
                print(f'\nYOUR WORD: "{word.upper()}"')
                print("This is NOT a valid English word.")
                continue

            anagrams = checker.get_anagrams(word)

            print(f'\nYOUR WORD: "{word.upper()}"')
            print("This is a valid English word.")

            if anagrams:
                print("Anagrams for your word:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        else:
            print("❌ Invalid choice. Please select 1 or 2.")


if __name__ == "__main__":
    main()
