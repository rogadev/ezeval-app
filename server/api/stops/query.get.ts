import supabase from '~~/server/db/supabase';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const stopID = event.context.params.id;
  const result = await supabase.fetchStop(stopID);
  return result;
});
