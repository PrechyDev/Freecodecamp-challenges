function booWho(bool) {
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}

// the === operator is a strict equality operator which does not allow type conversion when comparing operand. Using == would give you booWho(1) = true

booWho(null);
