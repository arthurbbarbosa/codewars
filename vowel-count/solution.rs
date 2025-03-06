fn solution(string: &str) -> usize {
  string.matches(|x| "aeiou".contains(x)).count()
}
