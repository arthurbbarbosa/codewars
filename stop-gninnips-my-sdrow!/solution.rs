fn solution(words: &str) -> String {
  words.split_whitespace()
    .map(|word| if word.len() >= 5 { word.chars().rev().collect::<String>() } else { word.to_string() })
    .collect::<Vec<String>>()
    .join(" ")
}
