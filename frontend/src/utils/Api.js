class Api {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  //приватная функция проверки ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _authHeader() {
    const jwt = localStorage.getItem("jwt");
    return jwt ? { Authorization: `Bearer ${jwt}` } : null;
  }

  //получить карточки с сервера (GET)
  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: { ...this._headers, ...this._authHeader() },
    }).then(this._checkResponse);
  }

  //добавить карточку (POST)
  postCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: { ...this._headers, ...this._authHeader() },
      body: JSON.stringify({ name: data.name, link: data.link }),
    }).then(this._checkResponse);
  }

  //удалить карточку (DELETE)
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: { ...this._headers, ...this._authHeader() },
    }).then(this._checkResponse);
  }

  //получить данные пользователя (GET)
  getUserData() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: { ...this._headers, ...this._authHeader() },
    }).then(this._checkResponse);
  }

  //заменить данные пользователя (PATCH)
  setUserData(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: { ...this._headers, ...this._authHeader() },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }

  //заменить аватар (PATCH)
  setNewAvatar(data) {
    return fetch(this._baseUrl + `/users/me/avatar`, {
      method: "PATCH",
      headers: { ...this._headers, ...this._authHeader() },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  //“залайкать” карточку (PUT)
  setLikeCard(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "PUT",
      headers: { ...this._headers, ...this._authHeader() },
    }).then(this._checkResponse);
  }

  //удалить лайк карточки (DELETE)
  deleteLikeCard(id) {
    return fetch(this._baseUrl + `/cards/${id}/likes`, {
      method: "DELETE",
      headers: { ...this._headers, ...this._authHeader() },
    }).then(this._checkResponse);
  }
}

const api = new Api({
  url: "https://api.mesto.bellamir.nomoredomains.sbs",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
