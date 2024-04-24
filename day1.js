// Programming Question: Longest Word in a string 

// Write a function findLongestWord that takes a string as input and return the longest word in the string. If there are multiple longest word, return the first one encountered.

      // const findLongestWord = (str) =>{
      //   if(str.trim() === 0){
      //     return false;
      //   }
      //   words = str.split(" ");
      //   words = words.sort((a,b) => b.length - a.length);
      //   return words[0];
      // };

      // console.log(findLongestWord("This is AwesomeJavascriptQuestion you must try it"));


      // Method Second 👍


      const findLongestWord = (str) =>{
        if(str.trim() === 0){
          return false;
        };
        words = str.split(" ");

        return words.reduce((accum, current) => (current.length > accum.length ? current : accum), "");
      };

      console.log(findLongestWord("This is AwesomeJavascriptQuestion you must try it"));