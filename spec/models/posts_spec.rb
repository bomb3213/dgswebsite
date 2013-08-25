require 'spec_helper'

describe Posts do
  it { should belong_to(:user) }
  it { should have_many(:tags).through(:taggings_ }

end
