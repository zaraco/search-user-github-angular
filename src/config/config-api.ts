const baseUrl = 'https://api.github.com'
export const endpoints = {
  search: (username: string) => `${baseUrl}/search/users?q=${username}`,
}
