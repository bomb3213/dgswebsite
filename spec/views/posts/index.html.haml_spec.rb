require 'spec_helper'

describe "posts/index" do
  it "displays the title" do
    :render
    it { should include("Dgs") }
  end
end
