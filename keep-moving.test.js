const keepMoving = require('./keep-moving')

const testCases = [
  {
    args: [true, true], expected: true
  },
  {
    args: [true, false], expected: true
  },
  {
    args: [false, false], expected: false
  },
  {
    args: [false, true], expected: true
  }
]

function boolToString(v) {
  return v ? "true" : "false"
}

for (const testCase of testCases) {
  const ans = keepMoving(...testCase.args)
  const caseString = `keepMoving(${boolToString(testCase.args[0])}, ${boolToString(testCase.args[1])}) -> ${boolToString(testCase.expected)}`
  if (ans !== testCase.expected) {
    throw new Error(`${caseString} \n\tgot ${boolToString(ans)}`)
  }

  console.log(`✅ keepMoving(${boolToString(testCase.args[0])}, ${boolToString(testCase.args[1])}) -> ${boolToString(testCase.expected)}`)
}
