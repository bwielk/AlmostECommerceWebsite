class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :item_id
      t.decimal :price
      t.text :url
      
      t.timestamps null: false
    end
  end
end
