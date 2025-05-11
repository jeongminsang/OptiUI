import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
})