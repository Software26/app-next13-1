
async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users/2");
  const data = await res.json();
  return data.data
}


async function IndexPage(){
  const users = await fetchUsers();
  console.log(users)

  return(
    
    <div>
      <h1>Index page</h1>

    </div>
  )
}

export default IndexPage