require 'spec_helper'

describe Posts do
  it { should belong_to(:user) }
end
