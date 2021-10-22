const LinksSocialMedias = {
  github: 'Myke-D',
  youtube: 'youtube',
  facebook: 'michael.douglas.9235',
  instagram: 'mikedoug154',
  twitter: 'twitter'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedias[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileinfos() {
  const url = `https://api.github.com/users/${LinksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileinfos()
