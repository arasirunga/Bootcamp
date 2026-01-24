
class AnagramChecker:
    def __init__(self, word_list_file="sowpods.txt"):
        """
        Load the word list into a set for fast lookup
        """
        with open(word_list_file, "r") as f:
            self.words = set(word.strip().lower() for word in f)




    
    def is_valid_word(self, word):
        """
        Check if the word exists in the dictionary
        """
        return word.lower() in self.words
        

    def is_anagram(self, word1, word2):
        """
        Check if two words are anagrams of each other
        """
        return (
            word1 != word2
            and sorted(word1) == sorted(word2)
        )
    

    
    def get_anagrams(self, word):
        """
        Return a list of anagrams for the given word
        """
        word = word.lower()
        anagrams = []


        for w in self.words:
            if self.is_anagram(word, w):
                anagrams.append(w)

        return anagrams