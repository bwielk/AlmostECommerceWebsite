class Additions < ActiveRecord::Migration
  def change
    add_column :products, :stock, :integer
    add_column :products, :clothing, :string
  end
end
