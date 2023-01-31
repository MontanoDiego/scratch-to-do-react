import { checkError, client } from './client.js';


export async function getTodoItems() {
  const response = await client.from('todo').select();
  
  return checkError(response);
}