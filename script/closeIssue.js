const { ISSUE_NUMBER, GITHUB_TOKEN } = process.env

const log = w => {
  console.log(w)
  return w
}

if (!/^\d+$/.test(ISSUE_NUMBER)) {
  throw new Error(`Invalid ISSUE_NUMBER: ${ISSUE_NUMBER}`)
}

fetch(log(`https://api.github.com/repos/dd-center/vdb/issues/${ISSUE_NUMBER}`), {
  method: 'PATCH',
  body: JSON.stringify({
    state: 'closed',
  }),
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
  },
}).then(log)
