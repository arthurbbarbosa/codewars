fn solution(num: u64) -> u64 {
  num
    .to_string()
    .chars()
    .map(|x| x.to_digit(10).unwrap().pow(2).to_string())
    .collect::<String>()
    .parse()
    .unwrap()
}
