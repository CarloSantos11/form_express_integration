document.getElementById('signupform').addEventListener("submit", handleUserChanges);

let user = {
  "username": "",
  "role": "",
  "languages": [],
  "socialLinksArray": []
}

function updateUser(user) {
  let username = document.querySelector('#username input').value;
  let role = Array.from(document.querySelectorAll('[name="role"]')).filter(x => x.checked)[0].value;
  
  let languagesArray = Array
    .from(document.querySelectorAll('[name="languages"]'))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  let socialLinksArray = Array
    .from(document.querySelectorAll('[name="social_links'))
    .filter(x => x.value != "")
    .map(textField => textField.value);

  let _user = user
  _user.username = username || user.username;
  _user.role = role || user.role;
  _user.languages = languagesArray || user.languages;
  _user.socialLinksArray = socialLinksArray || user.socialLinksArray;

  return _user
}

function updateUserUI () {
  document.querySelector('#post_username').innerHTML = user.username;
  document.querySelector('#post_role').innerHTML = user.role;
  document.querySelector('#post_languages').innerHTML = user.languages;
  displaySocialMedia();
  document.querySelector('#signupform').reset();
}

function handleUserChanges (e) {
  e.preventDefault();
  _user = updateUser(user);
  updateUserUI(_user);
  user = _user
}

function displaySocialMedia() {
  let postInfo = document.querySelector('.post')
  let nodelistOfSocialLinks = document.getElementsByName("social_links");
  let icon = "";
  let present = false;

  nodelistOfSocialLinks.forEach(socialField => {
    if (socialField.value.length > 0) {
      present = true;
      icon = document.querySelector(`#${"d_"+ socialField.id}`)
      icon.classList.remove("hidden");
      let linkUrl = socialField.value;
      icon.href = linkUrl;
    }
  })

   if (postInfo.classList.contains('hidden')) {
    postInfo.classList.remove('hidden');
  }
}