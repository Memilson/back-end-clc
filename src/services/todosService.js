import { supabase } from '../config/supabaseClient.js';


export async function getAllTodos() {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) throw error;
  return data;
}

export async function createTodo(item) {
  const { data, error } = await supabase.from('todos').insert(item).single();
  if (error) throw error;
  return data;
}

export async function updateTodo(id, updates) {
  const { data, error } = await supabase.from('todos').update(updates).eq('id', id).single();
  if (error) throw error;
  return data;
}

export async function deleteTodo(id) {
  const { data, error } = await supabase.from('todos').delete().eq('id', id).single();
  if (error) throw error;
  return data;
}