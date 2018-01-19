class RemoveColumnFromTours < ActiveRecord::Migration[5.1]
  def change
    remove_column :tours, :remove_column, :photo
  end
end
