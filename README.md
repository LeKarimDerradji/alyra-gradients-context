# Alyra Gradients - Context API

We often need data from the external world in react, that we usually fetch from a given API. 

Usually, our API fetching can be quiet loud and heavy on the UI render. 

We can sanitize that, and perform a peaceful data-fetching, on a file separated from every components while having them available everywhere. 

## App Structure Before : 

## App Strcuture After : 

## useEffect && useReducer 

```javascript
useEffect(() => { 
      fetch(`https://gradients-api.herokuapp.com/gradients`)
        .then((response) => {
          dispatch({ type: "FETCH_INIT" });
          if (!response.ok) {
            throw new Error(
              `Nous n'avons pas pu lire le registre des gradients, status : ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
          console.log(data)
        })
        .catch((error) => {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        });
    }, []);

```
## Give me some Context :

## Your eyes feels lighter and lighter 
